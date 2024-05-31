import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="flex flex-col items-center m-56">
            <div>
                <h1 className="text-3xl font-semibold m-2">Dagmara Szadkowska</h1>
                <h2 className="text-xl m-2">nr albumu: 119199</h2>
            </div>

            <div className="flex flex-col items-center">
                <Link href="/cat" className="m-2">
                    <Button>Otwórz stronę z kotkiem</Button>
                </Link>
                <Link href="/weather" className="m-2">
                    <Button>Sprawdź pogodę</Button>
                </Link>
            </div>
        </main>
    )
}
