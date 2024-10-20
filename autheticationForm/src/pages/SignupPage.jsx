import React from 'react';
import AuthForm from '../components/AuthForm';

const SignupPage = () => {
  const handleSignupSubmit = (formData) => {
    // You can make an API call here to register the user
    console.log('Signing up user:', formData);
  };

  return (
    <div>
      <AuthForm isLogin={false} onSubmit={handleSignupSubmit} />
    </div>
  );
};

export default SignupPage;
