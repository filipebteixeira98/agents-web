import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false)

  const recorder = useRef<MediaRecorder | null>(null)

  function stopRecording() {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Your browser does not support recording resources')

      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log(event.data)
      }
    }

    recorder.current.onstart = () => {
      console.log('Recording started...')
    }

    recorder.current.onstop = () => {
      console.log('Recording stopped/paused')
    }

    recorder.current.start()
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Stop Recording</Button>
      ) : (
        <Button onClick={startRecording}>Record audio</Button>
      )}
      {isRecording ? <p>Recording...</p> : <p>Paused</p>}
    </div>
  )
}
