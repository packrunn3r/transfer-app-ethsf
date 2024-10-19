import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
export default function Home() {
  return (
    <>
      <h2 className='mb-2 text-2xl'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <div className='mt-4'>
        <p className='mb-4'>hello world</p>
        <Button size='sm' className='bg-purple-500 hover:bg-purple-600'>
          <a href='https://google.com'>Click me. First Shadcn component.</a>
        </Button>
        <Textarea placeholder='type something here' className='mt-4'></Textarea>
      </div>
    </>
  )
}
