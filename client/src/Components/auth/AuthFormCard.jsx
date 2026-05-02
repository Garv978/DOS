function AuthFormCard({
  icon,
  title,
  subtitle,
  children,
  onSubmit,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <i className={`fas ${icon} text-3xl text-red-500 mb-3`}></i>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
        </form>

      </div>
    </div>
  );
}

export default AuthFormCard;
