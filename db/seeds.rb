4.times do
  menu = Menu.create(
    option: Faker::NewGirl.character,
  )

 10.times do
   menu.dishes.create(
    name: Faker::NewGirl.quote,
    price: Faker::Commerce.price
  )
 end
end

# 10 items for every menu

