function SignupButton({ text, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
    >
      {text}
    </button>
  );
}

export default SignupButton;
