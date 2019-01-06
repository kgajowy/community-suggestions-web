import * as React from "react";

interface SupportProps<T> {
  positiveAction: () => any;
  reverseAction: () => any;
  positiveButtonText: string;
  reverseButtonText: string;
  pending: boolean;
  resource: T;
  positiveActionTaken: boolean;
}
