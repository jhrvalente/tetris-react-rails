class GamesController < ApplicationController

  def new
    @game = Game.new(status: 1, level: 1, levelUp: false, lines_lvl_ant: 0, paused: false, n_lines: 20, n_cols: 10, n_levels: 29, completed_lines: 0, score: 0, current_piece_id: nil, next_piece_id: nil, speed: [])
    @game.save
    render json: @game
  end

  def start
  	@game = Game.find(params[:id])
  	@game.start
  end

  def getGameDetails
  	@game = Game.find(params[:id])
    render json: @game
  end

  def getPieceDetails
  	@game = Game.find(params[:id])
  	@current_piece = Piece.find(@game.current_piece_id)
  	@next_piece = Piece.find(@game.next_piece_id)
  	render json: {current: @current_piece, next: @next_piece}
  end

end
