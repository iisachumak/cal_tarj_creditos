
export const data = [
    /**Bancarazida - Plan Simple */
    {
        id: 1,
        name: 'Bancarazida - Plan Simple',
        cuotas: [
            { plazo: 3, financiacion: 1.10 / 3 },
            { plazo: 6, financiacion: 1.18 / 6 },
            /** { plazo: 9, financiacion: 1.25 / 9 },
            { plazo: 12, financiacion: 1.34 / 12 }*/
            
        ],
    },
    /**AMEX (Santander, Macro, Patagonia, Hsbc, Galicia) */
    {
        id: 2,
        name: 'AMEX (Santander, Macro, Patagonia, Hsbc, Galicia)',
        cuotas: [
            { plazo: 3, financiacion: 1.12 / 3 },
            { plazo: 6, financiacion: 1.20 / 6 },
            /** { plazo: 9, financiacion: 1.26 / 9 },
            { plazo: 12, financiacion: 1.35 / 12 },*/
        ],
    },
    /**Argencard, Nativa, CABAL */
    {
        id: 3,
        name: 'Nativa, CABAL',
        cuotas: [
            { plazo: 3, financiacion: 1.10 / 3 },
            { plazo: 6, financiacion: 1.18 / 6 },
            /** { plazo: 9, financiacion: 1.25 / 9 },
            { plazo: 12, financiacion: 1.34 / 12 }*/
        ],
    },
    /**VISA / MASTER/DINNER/ CABAL/ NATIVA bancarias  */
    {
        id: 4,
        name: 'Bcada - Otros Bancos',
        cuotas:[
            { plazo: 9, financiacion: 1.30 / 9 },
            { plazo: 12, financiacion: 1.40 / 12 },
            { plazo: 15, financiacion: 1.51 / 15 },
            { plazo: 18, financiacion: 1.63 / 18 }
        ]
    },
    /**VISA- MASTER-BCO ,FRANCES- SANTANDER-GALICIA-NACION-MACRO */
    {
        id: 5,
        name: 'Bcada - Frances, Santander, Galicia, Nacion, Macro',
        cuotas: [
            { plazo: 9, financiacion: 1.59 / 9 },
            { plazo: 12, financiacion: 1.81 / 12 },
            { plazo: 15, financiacion: 2.07 / 15 },
            { plazo: 18, financiacion: 2.35 / 18 }
        ]
    },
    /**Visa/Master No Bca */
    {
        id: 6,
        name: 'Visa/Master No Bca',
        cuotas: [
            { plazo: 3, financiacion: 1.21 / 3 },
            { plazo: 6, financiacion: 1.38 / 6 },
            { plazo: 12, financiacion: 1.81 / 12 },
            { plazo: 18, financiacion: 2.35 / 18 },
        ],
    },
    /**CABAL NO SIMPLE OTROS BANCOS  */
    {
        id: 7,
        name: 'CABAL NO SIMPLE OTROS BANCOS',
        cuotas: [
            /**
            { plazo: 3, financiacion: 1.25 / 3 },
            { plazo: 6, financiacion: 1.45 / 6 },
              */
            { plazo: 12, financiacion: 2.02 / 12 },
            { plazo: 18, financiacion: 2.75 / 18 }
        ],
    },
    /**AMEX NO SIMPLE OTROS BANCOS  */
    {
        id: 8,
        name: 'AMEX NO SIMPLE OTROS BANCOS',
        cuotas: [
            { plazo: 3, financiacion: 1.22 / 3 },
            { plazo: 6, financiacion: 1.41 / 6 },
            { plazo: 12, financiacion: 1.97 / 12 },
            { plazo: 18, financiacion: 2.81 / 18 },
        ],
    },
    /**Naranja */
    {
        id: 9,
        name: 'Naranja',
        cuotas: [
            { plazo: 6, financiacion: 1.16 / 6 },
            { plazo: 12, financiacion: 1.37 / 12 },
            { plazo: 14, financiacion: 1.51 / 14 },
        ],
    },
    /**SuCredito */
    {
        id: 10,
        name: 'SuCredito',
        cuotas: [
            /*{ plazo: 1, financiacion: 1.03 / 1 },*/
            { plazo: 3, financiacion: 1.10 / 3 },
            { plazo: 6, financiacion: 1.21 / 6 },
            { plazo: 9, financiacion: 1.32 / 9 },
            { plazo: 12, financiacion: 1.46 / 12 },
        ],
    },
    
    /**Credicash */
    {
        id: 11,
        name: 'Credicash',
        cuotas: [
            /*{ plazo: 1, financiacion: 1.03 / 1 },*/
            { plazo: 3, financiacion: 1.10 / 3 },
            { plazo: 6, financiacion: 1.30 / 6 },
            { plazo: 9, financiacion: 1.49 / 9 },
            { plazo: 12, financiacion: 1.90 / 12 },
        ],
    },
    /**Sol */
    {
        id: 12,
        name: 'Sol',
        cuotas: [
            /*{ plazo: 1, financiacion: 1.03 / 1 },*/
            { plazo: 3, financiacion: 1.11 / 3 },
            { plazo: 6, financiacion: 1.18 / 6 },
            { plazo: 9, financiacion: 1.25 / 9 },
            { plazo: 12, financiacion: 1.33 / 12 },
        ],
    },
    /**MACRO */
    {
        id: 13,
        name: 'Solo Macro Visa/Master',
        cuotas: [
            { plazo: 9, financiacion: 1.26 / 9 },
            { plazo: 12, financiacion: 1.36 / 12 },
        ],
    },
]