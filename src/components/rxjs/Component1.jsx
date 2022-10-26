import { sharingInformationService } from "../../services/sharing_information.service";

export function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };

  const noHandleClick = () => {
    sharingInformationService.getSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}>share information</button>
      <button onClick={noHandleClick}>not share information</button>
    </div>
  );
}
