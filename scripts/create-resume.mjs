// Generic, clearly labelled template. Replace public/resume.pdf before sharing.
import { writeFileSync } from 'node:fs';
const lines = [
  ['YOUR NAME', 27],
  ['Resume template - replace with your own details', 11],
  ['hello@yourname.com | Your city | Your portfolio URL', 10],
  ['', 12],
  ['PROFILE', 13],
  ['Write a short introduction about your skills, interests, and goals.', 11],
  ['', 12],
  ['EXPERIENCE', 13],
  ['Your role | Company | Dates', 12],
  ['Describe your responsibilities and a meaningful contribution.', 11],
  ['', 12],
  ['SELECTED PROJECTS', 13],
  ['Project name | Your contribution | Link', 12],
  ['Explain the problem, your approach, and the outcome.', 11],
  ['', 12],
  ['EDUCATION', 13],
  ['Qualification or area of study | Institution | Dates', 11],
  ['', 12],
  ['SKILLS', 13],
  ['Add the tools, technologies, and strengths that reflect your work.', 11],
];
let y = 778;
const stream = lines.map(([line, size]) => {
  const safe = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  const command = `BT /F1 ${size} Tf 0.15 0.15 0.13 rg 55 ${y} Td (${safe}) Tj ET`;
  y -= size + 15;
  return command;
}).join('\n');
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];
let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((object, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${object}\nendobj\n`; });
const start = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n`; });
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`;
writeFileSync(new URL('../public/resume.pdf', import.meta.url), pdf);
