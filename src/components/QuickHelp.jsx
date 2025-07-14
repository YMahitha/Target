const QuickHelp = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 z-50"
      onClick={() => alert('Redirecting to Help Center...')}
    >
      Quick Help
    </button>
  );
};

export default QuickHelp;
