// here are some other ternary expressions that work

n=r<15
  ?r<14
    ?c==9
      ?0
      :2
    :c>8&&c<43
      ?c==42
        ?1
        :0
      :2
  :2

n=r<14
  ?c==9
    ?0
    :2
  :r==14
    ?c>8&&c<42
      ?0
      :c==42
        ?1
        :2
    :2

n=r>14||c>42
  ?2
  :c<9
    ?2
    :c==9
      ?0
      :r<14
        ?2
        :c==42
          ?1
          :0
