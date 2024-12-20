import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="text-white hover:text-cosmic-gold mb-8"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="mr-2" />
      Back
    </Button>
  );
};

export default BackButton;