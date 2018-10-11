class CountriesController < ApplicationController
  def new
    @country = Country.new
  end

  def create
    Country.create country_params
    redirect_to countries_path
  end

  def index
    @countries = Country.all
  end

  def show
    @country = Country.find params[:id]
  end

  def edit
    @country = Country.find params[:id]
  end

  def update
    @country = Country.find params[:id]
    @country.update(country_params)
    redirect_to country_path(@country.id)
  end

  def destroy
    country = Country.find params[:id]
    country.destroy
    redirect_to countries_path
  end

  private

  def country_params
    params.require(:country).permit(:name, :capital, :area, :image)
  end
end
