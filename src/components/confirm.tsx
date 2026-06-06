import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  formData: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    occasion: string;
    seating: string;
    specialRequests: string;
  };
}

export default function ReservationConfirm() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | null;
  const formData = state?.formData;

  if (!formData) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-2xl w-full mx-auto my-6 text-center">
        <p className="text-red-600 mb-4 font-semibold">No reservation details found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-xl transition"
        >
          Go to Booking Form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg max-w-2xl w-full mx-auto my-6 text-center">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
        <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-green-900 mb-2">Reservation Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Your table has been successfully booked.
      </p>
      
      <div className="text-left space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 text-sm">
        <h2 className="text-base font-bold text-gray-800 border-b pb-2 mb-2">Booking Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Seating Preference:</strong> {formData.seating || "No Preference"}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
        {formData.specialRequests && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p><strong>Special Requests:</strong></p>
            <p className="text-gray-600 italic bg-white p-2 rounded-lg border border-gray-100 mt-1">"{formData.specialRequests}"</p>
          </div>
        )}
      </div>

      <button 
        onClick={() => navigate("/")} 
        className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-xl w-full sm:w-auto shadow-md transition"
      >
        Back to Home
      </button>
    </div>
  );
}