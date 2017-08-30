;; creat the main project namespace
(ns exercises-cljs.core)

;; enable cljs to print to the JS console of the browser
(enable-console-print!)

;; print to the console
(println "Hello, World!")
(print "exercise 1")
(println "Hello, Jerry!")

(print "exercise 2")
(println "All the king's horses and all the king's men")
(println "Humpty Dumpty sat on a wall,")
(println "All the king's horses and all the king's men")
(println "Couldn't put Humpty together again.")

(println "exercise 3")
(println "Hello, Esther!")
(println "Hello, Mary!")
(println "Hello, Joe!")

(print "exerceise 4")
(println "jerry z w liu")
(println "28")
(println "1.76")

(print "exercise 5")
(js/console.log "13 + 22" (+ 13 22))
(js/console.log "22 - 13" (- 22 13))
(print "22 * 13" (* 22 13))
(print "22 / 13" (/ 22 13))
(print "22 % 13" (mod 22 13))


(print "exercise 6")
(js/console.log "hours spent in coding in a semester: " (* 17 5 6)
                "percentage" (/ (* 6 5 100) 52.0)"%")

(print "exercise 7")
(print "my favourite number is " 6)

(print "exercise 8")
(def ^:dynamic a 123)
(def ^:dynamic b 526)
(defn swap []
  (let [c a]
    (binding [a b
              b c]
         (println "a " a "b " b))))
(swap)

(print "exercise 9")
(println "BMI" (/ 81.2 (* 1.78 1.78)))

(print "exercise 10")


(def name1 "jerry z w liu")
(def age 28)
(def height 176.00)
(def married false)
(js/console.log "name:" name1
                "age:"  age
                "height:" height
                "married:" married)

(println "exercise 11")
(def ^:dynamic aa 3)
(binding[aa 11]
  (println aa))

(def ^:dynamic bb 100)
(binding [bb 6]
  (println bb))

(def ^:dynamic cc 44)
(println (* cc 1.00))

(def d 125)
(println (/ d 5))

(def e 8)
(println (* 8 8 8))

(def f1 123)
(def f2 345)

(print (> f1 f2))


(def g1 350)
(def g2 200)
(print (> (* g2 1.00) g1))

(def h 1357988018575474)
(print (= 0 (mod h 11)))


(def i1 10)
(def i2 3)
(print (and (> i1 (* i2 i2)) (< i1 (* i2 i2 i2))))


(def j 1521)
(print (or (boolean (mod j 3)) (boolean (mod j 5))))

(def k "Apple")
(print (clojure.string/join "" (take 4 (repeat k))))

(println "exercise 12")
(def ll 10)
(def ww 10)
(def hh 10)
(println "volume " (* ll ww hh))

(defn vol []
  (let [s (for[i [ll ww hh]
              j [ll ww hh]]
           (* i j))
        ll2 (* ll ll)
        ww2 (* ww ww)
        hh2 (* hh hh)]
    (- (reduce + s)  ll2 ww2 hh2)))
(println "surface " (vol))

(println "exercise 13")
(defn remindSeconds [h m s]
  (let [h (- 24 h 1)
        m (- 60 m 1)
        s (- 60 s)]
    (+ (* 60 60 h) (* 60 m) s)))
(println "remindseconds " (remindSeconds 14 34 42))
