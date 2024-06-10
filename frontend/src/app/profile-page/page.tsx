"use client"
import React from 'react'
import AuthWrapper from '@/components/AuthWrapper/AuthWrapper'
import ProfilePage from '@/components/profile-page/profilepage'

const page: React.FC = () => {
  return (
    <AuthWrapper>     
      <ProfilePage/>
    </AuthWrapper>
)
}

export default page
