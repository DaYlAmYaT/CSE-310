fn main() {
    let mut done: bool = false;
    let mut whose_turn: &str = "O";
    let mut attempt: i32 = 0;

    let mut array:[[&str; 3]; 3] = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

    while !done {
        display_board(array);
        let mut choice: String = String::new();
        choice = get_choice(whose_turn).trim().to_string();
        array = change_board(array, whose_turn.to_string(), choice);
        attempt += 1;
        done = check_game_over(array, attempt); 
        whose_turn = get_turn(attempt);
    }
    display_board(array)
}   

fn display_board(board_array: [[&str; 3]; 3]) {
    println!("\n {} | {} | {}", board_array[0][0], board_array[0][1], board_array[0][2]);
    println!("-----------");
    println!(" {} | {} | {}", board_array[1][0], board_array[1][1], board_array[1][2]);
    println!("-----------");
    println!(" {} | {} | {}", board_array[2][0], board_array[2][1], board_array[2][2]);
}

fn get_turn(attempt: i32) -> &'static str{
    if attempt % 2 == 0 {
        return "O";
    } 
    else {
        return "X";  
    }
}

fn change_board(mut board_array: [[&str; 3]; 3], player: String, choice: String) -> [[&str; 3]; 3] {
    for row in 0..board_array.len() {
        for col in 0..board_array[row].len() {
            if board_array[row][col] == choice {
                if player == "O" {
                    board_array[row][col] = "O";
                } 
                else {
                    board_array[row][col] = "X";
                }
            }
        }
    }
    return board_array;
}

fn get_choice(player: &str) -> String {
    println!("\n{}'s turn", player);
    println!("Where do you want to play?");
    let mut answer = String::new();
    std::io::stdin().read_line(&mut answer).unwrap();
    return answer;
}

fn check_game_over(board_array: [[&str ;3]; 3], attempt: i32) -> bool {
    let one = board_array[0][0];
    let two = board_array[0][1];
    let three = board_array[0][2];
    let four = board_array[1][0];
    let five = board_array[1][1];
    let six = board_array[1][2];
    let seven = board_array[2][0];
    let eight = board_array[2][1];
    let nine = board_array[2][2];

    if one == two && two == three {
        return true;
    }
    else if four == five && five == six {
        return true;
    }
    else if seven == eight && eight == nine {
        return true;
    }
    else if one == four && four == seven {
        return true;
    }
    else if two == five && five == eight {
        return true;
    }
    else if three == six && six == nine {
        return true;
    }
    else if one == five && five == nine {
        return true;
    }
    else if three == five && five == seven {
        return true;
    }
    else if attempt == 9 {
        return true;
    }
    else {
        return false; 
    }
}