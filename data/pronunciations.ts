import type { Pronunciation } from '../typings/pronunciation';

export const vocabs: Pronunciation[] = [
  {
    genre: 'Softwares / Services',
    ents: [
      {
        name: 'axios',
        pronountiation: 'ache-cious',
        link: 'https://github.com/axios/axios',
        strict: false,
      },
      {
        name: 'ngrok',
        pronountiation: 'engine-R-OK',
        link: 'https://ngrok.com/',
        strict: false,
      },
      {
        name: 'QEMU',
        pronountiation: 'QM',
        link: 'https://www.qemu.org/',
        strict: false,
      },
      {
        name: 'Azure',
        pronountiation: 'ʌzule',
        link: 'https://azure.microsoft.com/en-us/',
        strict: true,
      },
    ],
  },
  {
    genre: 'Functions / Libraries',
    ents: [
      {
        name: 'stdio.h',
        pronountiation: 'standard-IO',
        strict: false,
      },
      {
        name: 'strcpy',
        pronountiation: 'star-copy',
        strict: false,
      },
      {
        name: 'strncpy',
        pronountiation: 'star-N-copy',
        strict: false,
      },
    ],
  },
  {
    genre: 'Others',
    ents: [
      {
        name: 'pwn',
        pronountiation: 'pæun',
        link: 'https://ptr-yudai.hatenablog.com/',
        strict: true,
      },
    ],
  },
];
