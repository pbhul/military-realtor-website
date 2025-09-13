'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorIcon, CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function VALoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [propertyTax, setPropertyTax] = useState('6000');
  const [homeInsurance, setHomeInsurance] = useState('1200');
  const [hoaFees, setHoaFees] = useState('0');

  // Calculate monthly payment
  const principal = parseFloat(loanAmount) || 0;
  const rate = (parseFloat(interestRate) || 0) / 100 / 12;
  const payments = (parseFloat(loanTerm) || 0) * 12;
  
  let monthlyPI = 0;
  if (rate > 0 && payments > 0) {
    monthlyPI = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
  }

  const monthlyTax = (parseFloat(propertyTax) || 0) / 12;
  const monthlyInsurance = (parseFloat(homeInsurance) || 0) / 12;
  const monthlyHOA = parseFloat(hoaFees) || 0;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

  const vaFundingFee = principal * 0.023; // 2.3% for first-time users

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              VA Loan Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Calculate your monthly payments with VA loan benefits. No PMI, competitive rates, and $0 down payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <CalculatorIcon className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">VA Loan Payment Calculator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Purchase Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="pl-8 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="500000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="6.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Years)
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="15">15 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Property Tax
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="pl-8 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="6000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Home Insurance
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(e.target.value)}
                      className="pl-8 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="1200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly HOA Fees
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(e.target.value)}
                      className="pl-8 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Payment Breakdown */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Payment Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Principal & Interest</span>
                    <span className="text-xl font-semibold">${monthlyPI.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Property Tax</span>
                    <span className="text-xl font-semibold">${monthlyTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Home Insurance</span>
                    <span className="text-xl font-semibold">${monthlyInsurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">HOA Fees</span>
                    <span className="text-xl font-semibold">${monthlyHOA.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">PMI</span>
                    <span className="text-xl font-semibold text-green-600">$0 (VA Benefit!)</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Monthly Payment</span>
                    <span className="text-3xl font-bold text-blue-600">${totalMonthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              {/* VA Loan Benefits */}
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your VA Loan Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>$0 Down Payment Required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>No PMI (Saves ~$400+/month)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Competitive Interest Rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>No Prepayment Penalties</span>
                  </div>
                </div>
              </div>

              {/* VA Funding Fee */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">VA Funding Fee</h4>
                <p className="text-sm text-gray-700 mb-2">
                  One-time fee: <strong>${vaFundingFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> (2.3% for first-time users)
                </p>
                <p className="text-xs text-gray-600">
                  *Can be financed into the loan. Disabled veterans are exempt from this fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/va-loan-pre-approval-checklist" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CurrencyDollarIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-Approval Checklist</h3>
              <p className="text-gray-600">Get everything you need for VA loan pre-approval</p>
            </Link>
            <Link href="/va-loan-guidance" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircleIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">VA Loan Guide</h3>
              <p className="text-gray-600">Complete guide to VA loan benefits and process</p>
            </Link>
            <Link href="/contact" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CalculatorIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Help</h3>
              <p className="text-gray-600">Connect with our MRP certified veteran agent</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}