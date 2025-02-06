import { LoadingScreen } from "@/components/loading-screen"
import { VideoGrid } from "@/components/video-grid"

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <VideoGrid />
    </main>
  )
}

