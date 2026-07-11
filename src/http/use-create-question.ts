import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { CreateQuestionRequest } from './types/create-question-request'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

interface CreateQuestionMutationContext {
  previousQuestions?: GetRoomQuestionsResponse
}

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()
  const queryKey = ['get-questions', roomId]

  return useMutation<
    CreateQuestionResponse,
    Error,
    CreateQuestionRequest,
    CreateQuestionMutationContext
  >({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },
    onError(_error, _variables, context) {
      if (context?.previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          queryKey,
          context.previousQuestions
        )
      }
    },
    async onMutate({ question }) {
      await queryClient.cancelQueries({ queryKey })

      const previousQuestions =
        queryClient.getQueryData<GetRoomQuestionsResponse>(queryKey)

      const questions = previousQuestions ?? []

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(queryKey, [
        newQuestion,
        ...questions,
      ])

      return { previousQuestions }
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}
