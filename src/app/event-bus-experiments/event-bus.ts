
import * as _ from 'lodash';

// Define the observer type
export interface Observer {
    notify(data: any);
}

// Define the subject interface
interface Subject {
    registerObserver(obs: Observer);
    unregisterObserver(obs: Observer);
    notifyObservers(data: any);
}

// Define global event for the app
class EventBus implements Subject {

    // observerCollection
    private observers: Observer[] = [];

    registerObserver(obs: Observer) {
        this.observers.push(obs);
    }

    unregisterObserver(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }
    notifyObservers(data: any) {
        this.observers.forEach(obs => obs.notify(data));
    }
}

// Create global event bus. single instance of the class
export const globalEventBus = new EventBus();

