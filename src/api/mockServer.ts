import { createServer } from 'miragejs';

export function startApiServer() {
  createServer({
    routes() {
      this.get('/api/classes', () => {
        return [{ id: 'X58E9647', name: '302 Science', link: 'https://www.classswift.viewsonic.io/' }];
      });

      this.get('/api/class/:id/students', (_, request) => {
        const classId = request.params.id;
        return classId === 'X58E9647'
          ? [
              { id: '01', name: 'Philip', score: 2, isOnline: true },
              { id: '02', name: 'Darrell', score: 5, isOnline: true },
              { id: '03', name: 'Guest', score: 0, isOnline: false },
              { id: '04', name: 'Cody', score: 9, isOnline: true },
              { id: '05', name: 'Guest', score: 0, isOnline: false },
              { id: '06', name: 'Guest', score: 0, isOnline: false },
              { id: '07', name: 'Bessie', score: 0, isOnline: true },
              { id: '08', name: 'Wendy', score: 3, isOnline: true },
              { id: '09', name: 'Guest', score: 0, isOnline: false },
              { id: '10', name: 'Esther', score: 1, isOnline: true },
              { id: '11', name: 'Guest', score: 0, isOnline: false },
              { id: '12', name: 'Gloria', score: 1, isOnline: true },
              { id: '13', name: 'Guest', score: 0, isOnline: false },
              { id: '14', name: 'Lee', score: 2, isOnline: true },
              { id: '15', name: 'Guest', score: 0, isOnline: false },
              { id: '16', name: 'Ann', score: 0, isOnline: true },
              { id: '17', name: 'Jacob', score: 8, isOnline: true },
              { id: '18', name: 'Calvin', score: 2, isOnline: true },
              { id: '19', name: 'Guest', score: 0, isOnline: false },
              { id: '20', name: 'Joe', score: 0, isOnline: true },
              { id: '21', name: 'Guest', score: 0, isOnline: false },
              { id: '22', name: 'Bill', score: 1, isOnline: true },
              { id: '23', name: 'Jay', score: 2, isOnline: true },
              { id: '24', name: 'Guest', score: 0, isOnline: false },
              { id: '25', name: 'Guest', score: 0, isOnline: false },
              { id: '26', name: 'Mary', score: 5, isOnline: true },
              { id: '27', name: 'Guest', score: 0, isOnline: false },
              { id: '28', name: 'Kevin', score: 2, isOnline: true },
              { id: '29', name: 'Guest', score: 0, isOnline: false },
              { id: '30', name: 'Guest', score: 0, isOnline: false },
            ]
          : [];
      });
    },
  });
}
