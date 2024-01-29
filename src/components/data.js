
export const data = [
    {
        id: 1,
        name: 'Bancarazida',
        cuotas: [
            { plazo: 1, financiacion: 1.02 },
            { plazo: 3, financiacion: 1.13 / 3 },
            { plazo: 6, financiacion: 1.25 / 6 },
            { plazo: 12, financiacion: 1.5 / 12 },
            { plazo: 18, financiacion: 1.78 / 18 },
        ],
    },
    {
        id: 2,
        name: 'Amex',
        cuotas: [
            { plazo: 3, financiacion: 1.14 / 3 },
            { plazo: 6, financiacion: 1.26 / 6 },
            { plazo: 12, financiacion: 1.52 / 12 },
            { plazo: 18, financiacion: 1.8 / 18 },
        ],
    },
    {
        id: 3,
        name: 'Naranja',
        cuotas: [
            { plazo: 1, financiacion: 1.03 / 1 },
            { plazo: 3, financiacion: 1.2 / 3 },
            { plazo: 5, financiacion: 1.23 / 12 },
            { plazo: 10, financiacion: 1.72 / 10 },
        ],
    },
]