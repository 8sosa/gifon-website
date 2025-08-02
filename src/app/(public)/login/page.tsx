import HeroSection from '@/components/HeroSection';

export default function LoginPage() {
  return (
    <>
      <HeroSection
        title="Member Login"
        description="Access your account to view exclusive resources and manage your membership."
        backgroundImage="/ph.svg"
      />

      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 w-full border rounded p-3" placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 w-full border rounded p-3" placeholder="********" />
            </div>

            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition">Log In</button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-primary underline">Forgot your password?</a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Don&apos;t have an account? <a href="#" className="text-primary underline">Sign Up</a></p>
          </div>
        </div>
      </main>
    </>
  );
}
