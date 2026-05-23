'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'

type FormData = {
  fullName: string
  company: string
  email: string
  investmentRange: string
  serviceInterest: string
  projectDetails: string
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
          Inquiry Received.
        </h3>
        <p style={{ color: 'var(--smoke)', fontFamily: 'var(--font-body)', maxWidth: '340px' }}>
          We review every submission personally. Expect a response within 48 business hours.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            {...register('fullName', { required: true })}
            placeholder="Jane Doe"
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
          <label style={labelStyle}>Company / Organization</label>
          <input
            {...register('company')}
            placeholder="Acme Corp"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
            onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(85,85,85,0.4)')}
          />
        </div>
        <div>
          <label style={labelStyle}>Premium Email</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            type="email"
            placeholder="jane@acmecorp.com"
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
          <label style={labelStyle}>Investment Range</label>
          <select
            {...register('investmentRange', { required: true })}
            style={{
              ...inputStyle,
              cursor: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              paddingRight: '1.5rem',
            }}
          >
            <option value="" style={{ background: '#1A1A1A' }}>
              Select Range
            </option>
            <option value="under-25k" style={{ background: '#1A1A1A' }}>
              Under ₹25,000/mo
            </option>
            <option value="25k-75k" style={{ background: '#1A1A1A' }}>
              ₹25,000 – ₹75,000/mo
            </option>
            <option value="75k-150k" style={{ background: '#1A1A1A' }}>
              ₹75,000 – ₹1,50,000/mo
            </option>
            <option value="150k-plus" style={{ background: '#1A1A1A' }}>
              ₹1,50,000+/mo
            </option>
            <option value="discuss" style={{ background: '#1A1A1A' }}>
              Prefer to discuss
            </option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label style={labelStyle}>Service Interest</label>
        <input
          {...register('serviceInterest')}
          placeholder="Brand Architecture, Digital Product Design..."
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(85,85,85,0.4)')}
        />
      </div>

      <div className="mb-10">
        <label style={labelStyle}>Project Details</label>
        <textarea
          {...register('projectDetails')}
          placeholder="Provide a brief overview of your objectives..."
          rows={4}
          style={{
            ...inputStyle,
            resize: 'vertical',
            lineHeight: '1.6',
          }}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--paper)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(85,85,85,0.4)')}
        />
      </div>

      <button type="submit" className="btn-signal-outline w-full justify-center cursor-none">
        Submit Inquiry
      </button>
    </form>
  )
}
