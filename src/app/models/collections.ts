export interface Course {
    course_name: string;
    course_coinsprice: string;
    course_description: string;
    game_id: string;
  }
  
  export interface Inventory {
    inv_id: string;
    inv_coins: string;
    achievements: Achievement[];
    courses: Course[];
  }
  export interface Card {
    card_id: {
      $oid: string;
    };
    cardNum: {
      $numberLong: string;
    };
    ownerName: string;
    expDate: {
      $date: {
        $numberLong: string;
      };
    };
  }
  export interface Achievement {
    achievement_name: string;
    achievement_description: string;
    achievement_reward: string;
  }
  
  
  export interface Ticket {
    ticket_id: string;
    ticket_reason: string;
    ticket_date: string;
    ticket_relevance: string;
    staff_id: string;
    ticket_closed: boolean;
  }
  
  export interface Follow {
    user_id: string;
  }
  
  
  export interface User {
    _id: { $oid: string };
    user_name: string;
    user_lastName: string;
    user_lastName2: string;
    user_email: string;
    user_password: string;
    role_id: string;
    cards: Card[];
    inventory: Inventory;
    coach_description: string;
    coach_rank: string;
    coach_game: string;
    coach_gameid: string;
    tickets: Ticket[];
    following: Follow[];
    followers: Follow[];
    userUid: string;
  }
  