export enum OpenApiExamples {
  CASE_1 = 'src/challenge-two/utils/email-test-case-1.eml',
  CASE_2 = 'src/challenge-two/utils/email-test-case-2.eml',
  CASE_3 = 'src/challenge-two/utils/email-test-case-3.eml',
}

export const OpenApiExampleObject = {
  example1: {
    summary: 'Case 1: Attached Json',
    value: OpenApiExamples.CASE_1,
  },
  example2: {
    summary: 'Case 2: Body link to json',
    value: OpenApiExamples.CASE_2,
  },
  example3: {
    summary: 'Case 3: Body link to web to json',
    value: OpenApiExamples.CASE_3,
  },
};
