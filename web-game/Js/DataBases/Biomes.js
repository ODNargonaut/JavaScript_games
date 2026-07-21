// Биомы
let biomes = 
{
    w: 80,
    h: 80,
    border:                           // Граница препятствий
    {
        // 1: [{L:70,R:70,T:70,B:60}],
        
        // 2: [{L:0,R:0,T:0,B:0}],

        101: {L:80,R:80,T:80,B:80},        
        102: {L:80,R:80,T:80,B:80},        
        103: {L:80,R:80,T:80,B:80},        
        104: {L:80,R:80,T:80,B:80},        
        105: {L:80,R:80,T:80,B:80},
        106: {L:80,R:80,T:80,B:80},
        107: {L:80,R:80,T:80,B:80},
        108: {L:80,R:80,T:40,B:40},
        109: {L:80,R:80,T:80,B:80},
        // =-==
        0: {L:80,R:80,T:-40,B:-40},

        201: {L:80,R:80,T:80,B:80},        
        202: {L:80,R:80,T:80,B:80},        
        203: {L:80,R:80,T:80,B:80},        
        204: {L:80,R:80,T:80,B:80},        
        205: {L:80,R:80,T:80,B:80},
        206: {L:80,R:80,T:80,B:80},
        207: {L:80,R:80,T:80,B:80},
        208: {L:80,R:80,T:80,B:80},
        209: {L:80,R:80,T:80,B:80},
        210: {L:80,R:80,T:80,B:80},
        211: {L:80,R:80,T:0,B:0},
        212: {L:80,R:80,T:80,B:80},
    },
    clones:
    [
        /*   n: 1,                     // Номер препятствия
         *   xcell: 1, Ycell: 1,       // Координаты в пределах камеры обзора игрока 
         *   distance: [{x: 0, y: 0}]  // Расстояние до биомы
        */
                                                       /* Light stone road - 1 */
        {n: 2, Xcell: 7, Ycell: 1, distance: [{x: 480, y: 0}]},     {n: 2, Xcell: 7, Ycell: 2, distance: [{x: 480, y: 80}]},   
        {n: 2, Xcell: 8, Ycell: 1, distance: [{x: 560, y: 0}]},     {n: 2, Xcell: 8, Ycell: 2, distance: [{x: 560, y: 80}]},
        
        {n: 2, Xcell: 7, Ycell: 3, distance: [{x: 480, y: 160}]},   {n: 2, Xcell: 7, Ycell: 4, distance: [{x: 480, y: 240}]},
        {n: 2, Xcell: 8, Ycell: 3, distance: [{x: 560, y: 160}]},   {n: 2, Xcell: 8, Ycell: 4, distance: [{x: 560, y: 240}]},
        
        {n: 2, Xcell: 7, Ycell: 5, distance: [{x: 480, y: 320}]},   {n: 2, Xcell: 2, Ycell: 6, distance: [{x: 80, y: 400}]}, 
        {n: 2, Xcell: 8, Ycell: 5, distance: [{x: 560, y: 320}]},   {n: 2, Xcell: 4, Ycell: 6, distance: [{x: 240, y: 400}]},
        {n: 2, Xcell: 3, Ycell: 5, distance: [{x: 160, y: 320}]},   {n: 2, Xcell: 3, Ycell: 6, distance: [{x: 160, y: 400}]},
                                                                    {n: 2, Xcell: 1, Ycell: 6, distance: [{x: 0, y: 400}]},
        {n: 2, Xcell: 2, Ycell: 7, distance: [{x: 80, y: 480}]},    {n: 2, Xcell: 5, Ycell: 6, distance: [{x: 320, y: 400}]},
        {n: 2, Xcell: 4, Ycell: 7, distance: [{x: 240, y: 480}]},   {n: 2, Xcell: 6, Ycell: 6, distance: [{x: 400, y: 400}]},
        {n: 2, Xcell: 3, Ycell: 7, distance: [{x: 160, y: 480}]},   {n: 2, Xcell: 7, Ycell: 6, distance: [{x: 480, y: 400}]},
        {n: 2, Xcell: 1, Ycell: 7, distance: [{x: 0, y: 480}]},     {n: 2, Xcell: 8, Ycell: 6, distance: [{x: 560, y: 400}]},
        {n: 2, Xcell: 5, Ycell: 7, distance: [{x: 320, y: 480}]},   {n: 2, Xcell: 9, Ycell: 6, distance: [{x: 640, y: 400}]},
        {n: 2, Xcell: 6, Ycell: 7, distance: [{x: 400, y: 480}]},   {n: 2, Xcell: 10, Ycell: 6, distance: [{x: 720, y: 400}]},
        {n: 2, Xcell: 7, Ycell: 7, distance: [{x: 480, y: 480}]},   {n: 2, Xcell: 11, Ycell: 6, distance: [{x: 800, y: 400}]},
        {n: 2, Xcell: 8, Ycell: 7, distance: [{x: 560, y: 480}]},   {n: 2, Xcell: 12, Ycell: 6, distance: [{x: 880, y: 400}]},
        {n: 2, Xcell: 9, Ycell: 7, distance: [{x: 640, y: 480}]},   {n: 2, Xcell: 13, Ycell: 6, distance: [{x: 960, y: 400}]},
        {n: 2, Xcell: 10, Ycell: 7, distance: [{x: 720, y: 480}]},  {n: 2, Xcell: 14, Ycell: 6, distance: [{x: 1040, y: 400}]},
        {n: 2, Xcell: 11, Ycell: 7, distance: [{x: 800, y: 480}]},  {n: 2, Xcell: 15, Ycell: 6, distance: [{x: 1120, y: 400}]},
        {n: 2, Xcell: 12, Ycell: 7, distance: [{x: 880, y: 480}]},  {n: 2, Xcell: 16, Ycell: 6, distance: [{x: 1200, y: 400}]},  
        {n: 2, Xcell: 13, Ycell: 7, distance: [{x: 960, y: 480}]},  {n: 2, Xcell: 17, Ycell: 6, distance: [{x: 1280, y: 400}]},
        {n: 2, Xcell: 14, Ycell: 7, distance: [{x: 1020, y: 480}]}, {n: 2, Xcell: 18, Ycell: 6, distance: [{x: 1360, y: 400}]}, 
        {n: 2, Xcell: 15, Ycell: 7, distance: [{x: 1100, y: 480}]}, {n: 2, Xcell: 19, Ycell: 6, distance: [{x: 1440, y: 400}]},
        {n: 2, Xcell: 16, Ycell: 7, distance: [{x: 1180, y: 480}]}, {n: 2, Xcell: 20, Ycell: 6, distance: [{x: 1520, y: 400}]},
        {n: 2, Xcell: 17, Ycell: 7, distance: [{x: 1260, y: 480}]}, {n: 2, Xcell: 21, Ycell: 6, distance: [{x: 1600, y: 400}]},
        {n: 2, Xcell: 18, Ycell: 7, distance: [{x: 1340, y: 480}]}, {n: 2, Xcell: 22, Ycell: 6, distance: [{x: 1680, y: 400}]},
        {n: 2, Xcell: 19, Ycell: 7, distance: [{x: 1420, y: 480}]},
        {n: 2, Xcell: 20, Ycell: 7, distance: [{x: 1500, y: 480}]}, {n: 2, Xcell: 7, Ycell: 8, distance: [{x: 480, y: 560}]},
        {n: 2, Xcell: 21, Ycell: 7, distance: [{x: 1580, y: 480}]}, {n: 2, Xcell: 8, Ycell: 8, distance: [{x: 560, y: 560}]},
        {n: 2, Xcell: 22, Ycell: 7, distance: [{x: 1660, y: 480}]}, 
        
        {n: 2, Xcell: 7, Ycell: 9, distance: [{x: 480, y: 640}]},   {n: 2, Xcell: 7, Ycell: 10, distance: [{x: 480, y: 720}]},
        {n: 2, Xcell: 8, Ycell: 9, distance: [{x: 560, y: 640}]},   {n: 2, Xcell: 8, Ycell: 10, distance: [{x: 560, y: 720}]},

        {n: 2, Xcell: 7, Ycell: 11, distance: [{x: 480, y: 800}]},
        {n: 2, Xcell: 8, Ycell: 11, distance: [{x: 560, y: 800}]},
                                                       /* -------------------- */
        
                                                             /* Home - 1 */
        // {n: 101, Xcell: 2, Ycell: 2, distance: [{x: 80, y: 80}]},   {n: 104, Xcell: 2, Ycell: 3, distance: [{x: 80, y: 160}]},
        // {n: 102, Xcell: 3, Ycell: 2, distance: [{x: 160, y: 80}]},  {n: 105, Xcell: 3, Ycell: 3, distance: [{x: 160, y: 160}]},
        // {n: 103, Xcell: 4, Ycell: 2, distance: [{x: 240, y: 80}]},  {n: 106, Xcell: 4, Ycell: 3, distance: [{x: 240, y: 160}]},
        
        // {n: 107, Xcell: 2, Ycell: 4, distance: [{x: 80, y: 240}]},
        // {n: 108, Xcell: 3, Ycell: 4, distance: [{x: 160, y: 240}]},
        // {n: 109, Xcell: 4, Ycell: 4, distance: [{x: 240, y: 240}]},
                                                             /* ------ */

                                                             /* Home - 2 */
        {n: 201, Xcell: 12, Ycell: 3, distance: [{x: 880, y: 160}]},  {n: 205, Xcell: 12, Ycell: 4, distance: [{x: 880, y: 240}]},
        {n: 202, Xcell: 13, Ycell: 3, distance: [{x: 960, y: 160}]},  {n: 206, Xcell: 13, Ycell: 4, distance: [{x: 960, y: 240}]},
        {n: 203, Xcell: 14, Ycell: 3, distance: [{x: 1040, y: 160}]}, {n: 207, Xcell: 14, Ycell: 4, distance: [{x: 1040, y: 240}]},
        {n: 204, Xcell: 15, Ycell: 3, distance: [{x: 1120, y: 160}]}, {n: 208, Xcell: 15, Ycell: 4, distance: [{x: 1120, y: 240}]},

        {n: 209, Xcell: 12, Ycell: 5, distance: [{x: 880, y: 320}]},
        {n: 210, Xcell: 13, Ycell: 5, distance: [{x: 960, y: 320}]},
        {n: 211, Xcell: 14, Ycell: 5, distance: [{x: 1040, y: 320}]},
        {n: 212, Xcell: 15, Ycell: 5, distance: [{x: 1120, y: 320}]}
                                                             /* ------ */
    ],
    home:
    {
        h1:
        {
            Num: 100,    // Номер дома;
            totalNumBlocks: 9,
            allDetails:  // блоки из которых он состоит
            {
                101: {n: 101, Xcell: 2, Ycell: 2, distance: [{x: 80, y: 80}]},
                102: {n: 102, Xcell: 3, Ycell: 2, distance: [{x: 160, y: 80}]},
                103: {n: 103, Xcell: 4, Ycell: 2, distance: [{x: 240, y: 80}]},
                104: {n: 104, Xcell: 2, Ycell: 3, distance: [{x: 80, y: 160}]},
                105: {n: 105, Xcell: 3, Ycell: 3, distance: [{x: 160, y: 160}]},
                106: {n: 106, Xcell: 4, Ycell: 3, distance: [{x: 240, y: 160}]},
                107: {n: 107, Xcell: 2, Ycell: 4, distance: [{x: 80, y: 240}]},
                108: {n: 108, Xcell: 3, Ycell: 4, distance: [{x: 160, y: 240}]},
                109: {n: 109, Xcell: 4, Ycell: 4, distance: [{x: 240, y: 240}]},
            },
            door:false,
            n:108,
            ps:
            {
                internal:
                {
                    n: 0,
                    Xcell: 5,
                    Ycell: 11,
                    distance: [{x: 320, y:800}]
                },
                external:
                {
                    n: 0,
                    Xcell: null,
                    Ycell: null,
                    distance: [{x: null, y:null}]
                }
            }
        },
        h2: {door:false,n:207,ps:null},
        bl: false
    }
};
