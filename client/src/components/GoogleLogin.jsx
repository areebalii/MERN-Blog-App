import React from 'react'
import { Button } from './ui/button'
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/helpers/firebase';
import { showToast } from '@/helpers/showToste';
import { getEnv } from '@/helpers/getEnv';
import { useNavigate } from 'react-router-dom';
import { RouteIndex } from '@/helpers/routeName';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    const googleResponse = await signInWithPopup(auth, provider);
    const user = googleResponse.user
    const bodyData = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL
    }
    try {
      const res = await fetch(`${getEnv("VITE_API_BASE_URL")}/api/auth/google-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();

      if (!res.ok) {
        return showToast("error", data.message);
      }

      showToast("success", data.message);
      navigate(RouteIndex);
    } catch (err) {
      showToast("error", err.message);
    }

  }

  return (
    <Button variant="outline" className="w-full" onClick={handleLogin}>
      <FaGoogle />
      Continue With Google
    </Button>
  )
}

export default GoogleLogin