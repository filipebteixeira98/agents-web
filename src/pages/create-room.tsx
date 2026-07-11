import { ArrowRight, AudioLines, Bot, MessageSquare } from "lucide-react"

import { CreateRoomForm } from "@/components/create-room-form"
import { RoomList } from "@/components/room-list"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <main className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="grid gap-8 py-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-14">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="secondary">AI-powered class assistant</Badge>
            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl font-bold text-4xl text-foreground tracking-tight md:text-6xl">
                Ask better questions from every class.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Create a room, record class audio, and let AI turn the
                transcription into short, useful answers.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button nativeButton={false} render={<a href="#create-room" />}>
                Create a room
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#recent-rooms" />}
                variant="outline"
              >
                View recent rooms
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>
                A simple workflow for class notes and answers.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex gap-3">
                <MessageSquare className="mt-0.5 size-5 text-primary" />
                <div>
                  <h2 className="font-medium text-foreground">
                    Create a focused room
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Keep questions organized by class, topic, or study group.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <AudioLines className="mt-0.5 size-5 text-primary" />
                <div>
                  <h2 className="font-medium text-foreground">
                    Record the class
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Capture audio so the AI can use the transcription as
                    context.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Bot className="mt-0.5 size-5 text-primary" />
                <div>
                  <h2 className="font-medium text-foreground">
                    Get brief answers
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Ask questions and receive concise explanations based on the
                    class.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          className="grid items-start gap-8 md:grid-cols-2"
          id="create-room"
        >
          <div>
            <CreateRoomForm />
          </div>
          <div id="recent-rooms">
            <RoomList />
          </div>
        </section>
      </main>
    </div>
  )
}
