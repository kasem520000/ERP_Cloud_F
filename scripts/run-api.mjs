/**
 * تشغيل الـAPI بعد قراءة `.env` بقواعد dotenv (الأسطر المتعدّدة في مفاتيح JWT تُحوَّل
 * إلى أسطرٍ حقيقية). استعمال `source .env` في bash يترك `\n` حرفيّاً في المفتاح فيفشل
 * توقيع الـJWT بـ`asn1 ... header too long`.
 */
import { spawn } from 'node:child_process';

import { loadEnvFiles } from './dotenv.mjs';

loadEnvFiles();

const child = spawn(process.execPath, ['apps/api/dist/main.js'], { stdio: 'inherit', env: process.env });
child.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
