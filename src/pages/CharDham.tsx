import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CharDham() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/#chardham", { replace: true });
  }, [navigate]);
  return null;
}
