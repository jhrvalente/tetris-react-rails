Rails.application.routes.draw do
  get "/api/games/new", to: "games#new"
  get "/api/games/:id/start", to: "games#start"
  get "/api/games/:id/gamedetails", to: "games#getGameDetails"
  get "/api/games/:id/piecedetails", to: "games#getPieceDetails"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
