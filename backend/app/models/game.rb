class Game < ApplicationRecord

  #attr_accessor :id, :status, :level, :levelUp, :lines_lvl_ant, :paused, :speed, :nlines, :ncols, :n_levels, :completed_lines, :score, :current_piece_id, :next_piece_id

  serialize :speed, Array

  def start
    (1..@n_levels).each{|lvl| @speed << (300 - 10*(lvl-1))} 
    @current_piece = Piece.new(type: (rand()*18).round(), x: nil, y: nil, stopped: false, moveAllowedLeft: true, moveAllowedRight: true, moveAllowedDown: nil, col: nil, width: nil, height: nil, row: nil, heightBelow: 0, heightBelowMax: 0, heightBelowMin: 0, MovedLeft: false, MovedRight: false, inHole: false)
    @next_piece = Piece.new(type: nil, x: nil, y: nil, stopped: false, moveAllowedLeft: true, moveAllowedRight: true, moveAllowedDown: nil, col: nil, width: nil, height: nil, row: nil, heightBelow: 0, heightBelowMax: 0, heightBelowMin: 0, MovedLeft: false, MovedRight: false, inHole: false)

    case @current_piece.type
    when 0  
      @current_piece.col = (rand()*6).round()
    when 1, 2, 3, 7, 9, 10, 11, 16
      @current_piece.col = (rand()*7).round()
    when 4, 5, 6, 12, 13, 14, 15, 17, 18
      @current_piece.col = (rand()*8).round()
    when 8
      @current_piece.col = (rand()*9).round()
    end

    @lines = Array.new(@n_lines) { Array.new(@ncols, -1) }

    @heightsArray = Array.new(@n_cols) { 0 }

    @current_piece.save
    @next_piece.save

    @current_piece_id = @current_piece.id 
    @next_piece_id = @next_piece.id
    @current_piece.game_id = @id
    @next_piece.game_id = @id

    while(status)
      @duration_milli = @speed[@level-1]
      @counter = 0
      redraw
      sleep(@duration_milli/1000)
    end
  end

  def redraw
    @current_piece.row = @counter + 1

    if(@status && !@paused)

      if(!@current_piece.stopped)

        if(@counter == 0)
          
        end

      end

    end

  end


end
