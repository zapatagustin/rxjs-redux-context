import { useState } from "react";
import { useEffect } from "react";
import { sharingInformationService } from "../../services/sharing_information.service";

export function Component2() {
  const [count, setCount] = useState(0);
  const Subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    Subscription$.subscribe((data) => {
      if (!!data) {
        setCount(count + 1);
      }
    });
  });

  return <div>{count}</div>;
}
