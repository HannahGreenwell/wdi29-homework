class WorldLeadersController < ApplicationController
  def new
    @world_leader = WorldLeader.new
  end

  def create
    WorldLeader.create world_leader_params
    redirect_to world_leaders_path
  end

  def index
    @world_leaders = WorldLeader.all
  end

  def show
    @world_leader = WorldLeader.find params[:id]
  end

  def edit
    @world_leader = WorldLeader.find params[:id]
  end

  def update
    world_leader = WorldLeader.find params[:id]
    world_leader.update world_leader_params

    redirect_to world_leader_path(world_leader.id)
  end

  def destroy
  end

  private

  def world_leader_params
    params.require(:world_leader).permit(:name, :years_in_office, :alive, :image, :quote, :country_id)
  end
end
