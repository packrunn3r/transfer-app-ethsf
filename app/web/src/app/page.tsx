'use client'
import { useState } from 'react'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Home() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [currency, setCurrency] = useState('ETH')

  const handleSend = () => {
    // Implement your send logic here
    console.log(`Sending ${amount} ${currency} to ${recipient}`)
  }

  return (
    <div className='min-h-screen'>
      <h2 className='mb-2 text-2xl'>{SITE_NAME}</h2>
      <p className='mb-8'>{SITE_DESCRIPTION}</p>

      <div className='mx-auto max-w-md rounded-lg border-4 border-gray-700 bg-gray-800 p-3 text-green-200 shadow-lg'>
        <h3 className='mb-4 text-xl font-bold text-green-400'>Send Crypto</h3>
        <div className='space-y-4'>
          <div>
            <Label htmlFor='amount'>Amount</Label>
            <div className='mt-1 flex items-center'>
              <span className='mr-2 text-2xl'>$</span>
              <Input
                id='amount'
                type='number'
                placeholder='0'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='border-gray-600 bg-gray-700 text-white'
              />
            </div>
          </div>
          <div>
            <Label htmlFor='currency'>Currency</Label>
            <Select onValueChange={setCurrency} defaultValue={currency}>
              <SelectTrigger className='w-full border-gray-600 bg-gray-700 text-white'>
                <SelectValue placeholder='Select currency' />
              </SelectTrigger>
              <SelectContent className='border-1 border-gray-3 bg-black text-white'>
                <SelectItem className='focus:bg-pink-400' value='ETH'>
                  ETH
                </SelectItem>
                <SelectItem className='focus:bg-pink-400' value='BTC'>
                  BTC
                </SelectItem>
                <SelectItem className='focus:bg-pink-400' value='USDT'>
                  USDT
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor='recipient'>To</Label>
            <Input
              id='recipient'
              placeholder='Wallet address or ENS name'
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className='border-gray-600 bg-gray-700 text-white'
            />
          </div>
          <Button onClick={handleSend} className='w-full bg-purple-500 hover:bg-purple-600'>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
