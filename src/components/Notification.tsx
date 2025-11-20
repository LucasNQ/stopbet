import { useEffect } from 'react';

interface NotifyLib {
  Notify: {
    Success: (msg: string, options: object) => void;
  };
}

declare global {
  interface Window {
    Notiflix: NotifyLib;
  }
}

const Notification = () => {
  const names_masc = [
    'Jose',
    'Joao',
    'Antonio',
    'Francisco',
    'Carlos',
    'Paulo',
    'Pedro',
    'Lucas',
    'Luiz',
    'Marcos',
    'Luis',
    'Gabriel',
    'Rafael',
    'Daniel',
    'Marcelo',
    'Bruno',
    'Eduardo',
    'Felipe',
    'Rodrigo',
    'Manoel',
    'Mateus',
    'Andre',
    'Fernando',
    'Fabio',
    'Leonardo',
    'Gustavo',
    'Guilherme',
    'Leandro',
    'Tiago',
    'Anderson',
    'Ricardo',
    'Marcio',
    'Jorge',
    'Alexandre',
    'Roberto',
    'Edson',
    'Diego',
    'Vitor',
    'Sergio',
    'Claudio',
    'Matheus',
    'Thiago',
    'Geraldo',
    'Adriano',
    'Luciano',
    'Julio',
    'Renato',
    'Alex',
    'Vinicius',
    'Rogerio',
    'Samuel',
    'Ronaldo',
    'Mario',
    'Flavio',
    'Douglas',
    'Igor',
    'Davi',
    'Manuel',
    'Jeferson',
    'Cicero',
    'Victor',
    'Miguel',
    'Robson',
    'Mauricio',
    'Danilo',
    'Henrique',
    'Caio',
    'Reginaldo',
    'Joaquim',
    'Benedito',
    'Gilberto',
    'Marco',
    'Alan',
    'Nelson',
    'Cristiano',
    'Elias',
    'Wilson',
    'Valdir',
    'Emerson',
    'Luan',
    'David',
    'Renan',
    'Severino',
    'Fabricio',
    'Mauro',
    'Jonas',
    'Gilmar',
    'Jean',
    'Fabiano',
    'Wesley',
    'Diogo',
    'Adilson',
    'Jair',
    'Alessandro',
    'Everton',
    'Osvaldo',
    'Gilson',
    'Willian',
    'Joel',
    'Silvio',
    'Helio',
    'Maicon',
    'Reinaldo',
    'Pablo',
    'Artur',
    'Vagner',
    'Valter',
    'Celso',
    'Ivan',
    'Cleiton',
    'Vanderlei',
    'Vicente',
    'Arthur',
    'Milton',
    'Domingos',
    'Wagner',
    'Sandro',
    'Moises',
    'Edilson',
    'Ademir',
    'Adao',
    'Evandro',
    'Cesar',
    'Valmir',
    'Murilo',
    'Juliano',
    'Edvaldo',
    'Ailton',
    'Junior',
    'Breno',
    'Nicolas',
    'Ruan',
    'Alberto',
    'Rubens',
    'Nilton',
    'Augusto',
    'Cleber',
    'Osmar',
    'Nilson',
    'Hugo',
    'Otavio',
    'Vinicios',
    'Italo',
    'Wilian',
    'Alisson',
    'Aparecido',
  ];

  const names_fem = [
    'Maria',
    'Ana',
    'Francisca',
    'Antonia',
    'Adriana',
    'Juliana',
    'Marcia',
    'Fernanda',
    'Patricia',
    'Aline',
    'Sandra',
    'Camila',
    'Amanda',
    'Bruna',
    'Jessica',
    'Leticia',
    'Julia',
    'Luciana',
    'Vanessa',
    'Mariana',
    'Gabriela',
    'Vera',
    'Vitoria',
    'Larissa',
    'Claudia',
    'Beatriz',
    'Rita',
    'Luana',
    'Sonia',
    'Renata',
    'Eliane',
  ];

  useEffect(() => {
    if (!window.Notiflix) {
      console.warn('Notiflix not loaded');
      return;
    }

    let notificationCount = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const getDelayForIndex = (index: number) => {
      const delays = [5000, 8000, 15000, 25000, 32000, 40000, 50000];

      if (index < delays.length) {
        return delays[index];
      }

      return 10000;
    };

    const getRandomName = () => {
      const array_aux = ['masc', 'fem'];
      const type = array_aux[Math.floor(Math.random() * array_aux.length)];

      return type === 'masc'
        ? names_masc[Math.floor(Math.random() * names_masc.length)]
        : names_fem[Math.floor(Math.random() * names_fem.length)];
    };

    const showNotification = () => {
      const isDoubleNotification = (notificationCount + 1) % 3 === 0;

      let msg_final: string;

      if (isDoubleNotification) {
        const name1 = getRandomName();
        const name2 = getRandomName();
        msg_final = `<strong>${name1}</strong> e <strong>${name2}</strong> acabaram de adquirir o StopBet!`;
      } else {
        const name = getRandomName();
        msg_final = `<strong>${name}</strong> acabou de adquirir o StopBet!`;
      }

      const option = {
        position: 'left-bottom',
        cssAnimationStyle: 'from-left',
        plainText: false,
        timeout: 4000,
      };

      window.Notiflix.Notify.Success(msg_final, option);

      const nextDelay = getDelayForIndex(notificationCount);
      notificationCount++;
      timeoutId = setTimeout(showNotification, nextDelay);
    };

    timeoutId = setTimeout(showNotification, getDelayForIndex(0));

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default Notification;
