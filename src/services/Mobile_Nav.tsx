import { useLocation } from 'react-router-dom'

export default function Mobile_Nav_Services() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const pathNames = ["travel-to-space", "DESTINATION", "CREW", "TECHNOLOGY"]

  return {
    pathNames,
    splitLocation
  }
}
