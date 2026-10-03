import { useEffect, useState } from 'react';
import { api } from '../../api';
import { Booking } from '../../types';
import AuthPanel from '../../components/booking/AuthPanel';
import BookingForm, { BookingValues } from '../../components/booking/BookingForm';
import BookingList from '../../components/booking/BookingList';

const blank: BookingValues = { guestName: '', guests: 2, date: '', time: '' };
export default function BookingPage() {
  const [token,setToken]=useState(()=>localStorage.getItem('unique_access_token'));
  const [tab,setTab]=useState<'book'|'list'|'account'>('book');
  const [bookings,setBookings]=useState<Booking[]>([]);
  const [values,setValues]=useState<BookingValues>(blank);
  const [editing,setEditing]=useState<string|null>(null);
  const [message,setMessage]=useState('');
  useEffect(()=>{if(token)api.bookings(token).then(setBookings).catch(()=>{localStorage.removeItem('unique_access_token');setToken(null)})},[token]);
  const login=async(email:string,password:string)=>{const result=await api.login(email,password);localStorage.setItem('unique_access_token',result.accessToken);setToken(result.accessToken);setTab('book')};
  const register=async(data:Record<string,string>)=>{await api.register(data)};
  const submit=async(data:BookingValues)=>{if(!token){setTab('account');setMessage('Login First to save a booking.');return}try{const saved=editing?await api.update(token,editing,data):await api.create(token,data);setBookings(current=>editing?current.map(item=>item._id===editing?saved:item):[...current,saved]);setValues(blank);setEditing(null);setTab('list')}catch(error){setMessage(error instanceof Error?error.message:'Could not save booking.')}};
  const edit=(item:Booking)=>{setEditing(item._id);setValues({guestName:item.guestName,guests:item.guests,date:item.date,time:item.time});setTab('book')};
  const remove=async(id:string)=>{if(!token)return;try{await api.remove(token,id);setBookings(current=>current.filter(item=>item._id!==id))}catch(error){setMessage(error instanceof Error?error.message:'Could not remove booking.')}};
  return <main className="min-h-screen bg-black pb-16 pt-[58px]"><div className="flex min-h-screen flex-col md:flex-row"><aside className="relative flex min-h-[360px] w-full flex-col items-center justify-center gap-6 bg-[linear-gradient(#0007,#000c),url('/bg.png')] bg-cover text-center md:w-1/2"><b className="absolute top-[70px] tracking-[3px]">Unique</b><div><h2 className="font-script text-[38px] text-[#f8d49e]">Book a Table</h2><h1 className="text-5xl font-extrabold">Reservation</h1></div><div className="flex rounded-full border border-white/10 bg-white/5 p-1"><Pill active={tab==='book'} onClick={()=>setTab('book')}>{editing?'Edit Table':'Book a Table'}</Pill><Pill active={tab==='list'} onClick={()=>setTab('list')}>See Bookings</Pill><Pill active={tab==='account'} onClick={()=>setTab('account')}>{token?'Account':'Login'}</Pill></div></aside><section className="flex w-full items-center justify-center bg-[#070707] p-7 md:w-1/2 md:p-16"><div className="w-full max-w-[520px]">{message&&<p className="mb-5 rounded border border-red-500 bg-red-500/10 p-3 text-red-300">{message}</p>}{tab==='account'?<AuthPanel onLogin={login} onRegister={register}/>:tab==='list'?<BookingList bookings={bookings} onEdit={edit} onDelete={remove}/>:<BookingForm values={values} editing={Boolean(editing)} onChange={setValues} onSubmit={submit} onLogin={()=>setTab('account')}/>}</div></section></div></main>;
}
function Pill({active,children,onClick}:{active:boolean;children:string;onClick:()=>void}){return <button onClick={onClick} className={`rounded-full px-3 py-2 text-xs sm:px-4 ${active?'bg-white/10 text-[#f8d49e]':'text-white/60'}`}>{children}</button>}
