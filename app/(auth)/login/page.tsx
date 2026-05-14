"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#141a18] px-4 py-16">
            <div className="w-full max-w-[400px]">

                {/* Logo */}
                <div className="mb-10 text-center">
                    <Link href="/" className="inline-block">
                        <p className="font-serif text-[22px] font-bold tracking-[-0.01em] text-[#f0f5f1]">
                            Grove
                        </p>
                    </Link>
                </div>

                {/* Card */}
                <div className="rounded-[14px] border border-[#2a3d33] bg-[#1a2520] p-8">

                    {/* Header */}
                    <div className="mb-7">
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[.18em] text-[#4ecb8d]">
                            Selamat datang kembali
                        </p>
                        <h1 className="font-serif text-[24px] font-bold leading-[1.2] text-[#f0f5f1]">
                            Masuk ke akun kamu.
                        </h1>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="mb-1.5 block text-[11.5px] font-medium text-[#9ab0a2]">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="kamu@email.com"
                                className="w-full rounded-[8px] border border-[#2a3d33] bg-[#1e2e27] px-4 py-2.5 text-[13px] text-[#f0f5f1] placeholder:text-[#4a6458] outline-none transition focus:border-[#4ecb8d] focus:ring-1 focus:ring-[#4ecb8d]/20"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label className="text-[11.5px] font-medium text-[#9ab0a2]">
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-[11px] text-[#4ecb8d] transition hover:text-[#6ed9a0]"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-[8px] border border-[#2a3d33] bg-[#1e2e27] px-4 py-2.5 pr-11 text-[13px] text-[#f0f5f1] placeholder:text-[#4a6458] outline-none transition focus:border-[#4ecb8d] focus:ring-1 focus:ring-[#4ecb8d]/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a6458] transition hover:text-[#9ab0a2]"
                                >
                                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="button"
                            className="mt-1 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#4ecb8d] px-4 py-3 text-[13.5px] font-semibold text-[#141a18] transition hover:bg-[#6ed9a0]"
                        >
                            Masuk sekarang
                            <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#2a3d33]" />
                        <p className="text-[10.5px] text-[#4a6458]">atau</p>
                        <div className="h-px flex-1 bg-[#2a3d33]" />
                    </div>

                    {/* Google SSO */}
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2.5 rounded-[8px] border border-[#2a3d33] bg-[#1e2e27] px-4 py-2.5 text-[13px] text-[#c0d6c8] transition hover:border-[#3a5043]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Lanjutkan dengan Google
                    </button>
                </div>

                {/* Sign up link */}
                <p className="mt-6 text-center text-[12px] text-[#7a9e8a]">
                    Belum punya akun?{" "}
                    <Link
                        href="/register"
                        className="font-medium text-[#4ecb8d] transition hover:text-[#6ed9a0]"
                    >
                        Daftar gratis →
                    </Link>
                </p>

                {/* Footer note */}
                <p className="mt-4 text-center text-[10.5px] text-[#4a6458]">
                    Tidak perlu kartu kredit · Batalkan kapan saja
                </p>
            </div>
        </main>
    );
}