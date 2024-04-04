import { HttpErrorResponse } from '@angular/common/http';

interface ErrorMessage {
  readonly content: string;
  readonly title: string;
}

const ERROR_MESSAGES: { [code: string]: ErrorMessage } = {
  401: {
    content:
      'Invalid credentials or you have been suspended. Please try again or contact your administrator.',
    title: 'Unable to login',
  },
};

export function getErrorMessage(error: any): ErrorMessage {
  if (error instanceof HttpErrorResponse) {
    const title = error?.error?.code;
    const content = error?.error?.message;
    return ERROR_MESSAGES[error.status] || { content, title };
  }
  if (typeof error === 'string') {
    return { content: error, title: 'Error' };
  }
  return { content: JSON.stringify(error), title: 'Error' };
}
