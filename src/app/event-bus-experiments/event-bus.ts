
import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

// Define the observer type
export interface Observer {
    notify(data: any);
}

// Define the subject interface
interface Subject {
    registerObserver(eventType: string, obs: Observer);
    unregisterObserver(eventType: string, obs: Observer);
    notifyObservers(eventType: string, data: any);
}

// Define global event for the app
class EventBus implements Subject {

    // observerCollection
    private observers: { [key: string]: Observer[] } = {};

    registerObserver(eventType: string, obs: Observer) {
        this.observersPerEventType(eventType).push(obs);
    }

    unregisterObserver(eventType: string, obs: Observer) {
        _.remove(this.observersPerEventType(eventType), el => el === obs);
    }
    notifyObservers(eventType: string, data: any) {
        this.observersPerEventType(eventType).forEach(obs => obs.notify(data));
    }

    private observersPerEventType(eventType: string): Observer[] {
        const observersPerType = this.observers[eventType];
        if (!observersPerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
}

// Create global event bus. single instance of the class
export const globalEventBus = new EventBus();

