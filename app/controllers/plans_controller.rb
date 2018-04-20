class PlansController < ApplicationController
  def index
    @plans = Plan.order('due_date ASC')
    @plan = Plan.new
  end

  def create
    @plan = Plan.new(plan_attributes)

    if @plan.save
      render json: @plan, status: :ok
    else
      render json: @plan.errors, status: :unprocessable_entity
    end
  end

  private

    def plan_attributes
      params.require(:plan).permit(:title, :due_date)
    end
end