interface Props {
    onClick: () => void;
  }
  
  export default function GenerateButton({ onClick }: Props) {
    return (
      <button
        onClick={onClick}
        className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700"
      >
        Generate Experiment
      </button>
    );
  }