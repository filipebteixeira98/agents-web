import { useQuery } from '@tanstack/react-query'

import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      )
      const result: GetRoomQuestionsResponse = await response.json()

      return result
    },
    queryKey: ['get-questions', roomId],
    select: (questions) => {
      const occurrences = new Map<string, number>()

      return questions.map((question) => {
        const occurrence = occurrences.get(question.id) ?? 0

        occurrences.set(question.id, occurrence + 1)

        return {
          ...question,
          renderKey:
            occurrence === 0 ? question.id : `${question.id}-${occurrence}`,
        }
      })
    },
  })
}
