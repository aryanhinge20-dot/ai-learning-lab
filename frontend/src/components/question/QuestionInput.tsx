interface Props {
    question: string;
    setQuestion: (value: string) => void;
  }
  
  export default function QuestionInput({
    question,
    setQuestion,
  }: Props) {
    return (
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Paste your physics question here..."
        className="w-full h-48 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white resize-none outline-none"
      />
    );
  }