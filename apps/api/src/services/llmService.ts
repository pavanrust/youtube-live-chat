export async function answerQuestion(
  question: string,
  context: string
): Promise<string> {

  return `
Question:
${question}

Context:
${context}
`;
}