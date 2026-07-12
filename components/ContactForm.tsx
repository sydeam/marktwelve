'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'

type FormData = {
  fullName: string
  email: string
  phone: string
  message: string
}

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(85,85,85,0.4)',
  color: 'var(--paper)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  padding: '0.75rem 0',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'var(--smoke)',
  marginBottom: '0.25rem',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (_data: FormData) => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-24 px-8"
        style={{
          background: 'var(--pitch)',
          border: '1px solid rgba(85,85,85,0.2)',
          minHeight: '520px',
        }}
      >
        <CheckCircle size={40} style={{ color: 'var(--signal)', marginBottom: '1.5rem' }} />
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.25rem',
            color: 'var(--paper)',
            marginBottom: '0.75rem',
          }}
        >
          We heard you.
        </h3>
        <p style={{ color: 'var(--smoke)', fontFamily: 'var(--font-body)', maxWidth: '340px' }}>
          We review every message personally. Expect a response soon. We move fast.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        background: 'var(--pitch)',
        border: '1px solid rgba(85,85,85,0.2)',
        padding: '2.5rem',
      }}
      noValidate
    >
      <div className="space-y-8 mb-8">
        <div>
          <label style={labelStyle}>Say Hello (Name)</label>
          <input
            {...register('fullName', { required: true })}
            placeholder="Your name"
            style={{
              ...inputStyle,
              borderBottomColor: errors.fullName ? 'var(--signal)' : 'rgba(85,85,85,0.4)',
            }}
            onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
            onBlur={(e) => {
              e.target.style.borderBottomColor = errors.fullName
                ? 'var(--signal)'
                : 'rgba(85,85,85,0.4)'
            }}
          />
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            type="email"
            placeholder="you@company.com"
            style={{
              ...inputStyle,
              borderBottomColor: errors.email ? 'var(--signal)' : 'rgba(85,85,85,0.4)',
            }}
            onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
            onBlur={(e) => {
              e.target.style.borderBottomColor = errors.email
                ? 'var(--signal)'
                : 'rgba(85,85,85,0.4)'
            }}
          />
        </div>

        <div>
          <label style={labelStyle}>Contact Number</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+91 00000 00000"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
            onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(85,85,85,0.4)')}
          />
        </div>

        <div>
          <label style={labelStyle}>Your Message</label>
          <textarea
            {...register('message', { required: true })}
            placeholder="Tell us what your mark should look like..."
            rows={5}
            style={{
              ...inputStyle,
              resize: 'vertical',
              lineHeight: '1.6',
              borderBottomColor: errors.message ? 'var(--signal)' : 'rgba(85,85,85,0.4)',
            }}
            onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
            onBlur={(e) => (e.target.style.borderBottomColor = errors.message ? 'var(--signal)' : 'rgba(85,85,85,0.4)')}
          />
        </div>
      </div>

      <button type="submit" className="btn-signal-outline w-full justify-center cursor-none">
        Send
      </button>

      <p
        className="mt-6 text-center"
        style={{ color: 'var(--ash)', fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}
      >
        Need an immediate response?{' '}
        <a
          href="https://wa.me/919391725839"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--signal)' }}
        >
          Text us on WhatsApp
        </a>{' '}
        and you&apos;ll be redirected instantly.
      </p>
    </form>
  )
}
